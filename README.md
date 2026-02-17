# Elektronika (Django) Deployment on AlwaysData

This document outlines the steps to deploy and manage your Django application on AlwaysData.

## 1. Local Project Preparation

Ensure your `settings.py` is configured for production. These changes have already been applied to your local `settings.py`:
*   `SECRET_KEY`: Reads from `DJANGO_SECRET_KEY` environment variable.
*   `DEBUG`: Reads from `DJANGO_DEBUG` environment variable, defaults to `False`.
*   `ALLOWED_HOSTS`: Reads from `DJANGO_ALLOWED_HOSTS` environment variable.
*   `STATIC_ROOT`: Set to `BASE_DIR / 'staticfiles'`.

## 2. Push to GitHub

Ensure your project is pushed to your GitHub repository. This is where AlwaysData will fetch your code from.

```bash
# On your local machine (if not already done)
git init
git add .
git commit -m "Initial commit for AlwaysData deployment"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
*(Replace `<YOUR_GITHUB_REPO_URL>` with your actual GitHub repository URL)*

## 3. AlwaysData Site Configuration (Dashboard)

Log in to your AlwaysData dashboard and configure your site:

1.  **Create a New Site:**
    *   Go to **Web** -> **Sites** -> **Add a site**.
    *   Choose **"Custom application"**.
    *   **Type:** Select `Python` -> `WSGI`.

2.  **General Settings:**
    *   **Name:** `szkola` (or your chosen site name)
    *   **Working directory:** `/home/lon40seminarium-kotzian-oskar/szkola`
    *   **Application path:** `elektronika/wsgi.py`
    *   **Python version:** `3.11` (This is critical to match your virtual environment and AlwaysData's uWSGI environment).

3.  **Environment Variables:**
    *   Set these in the `Environment variables` field. Remember to generate a strong `SECRET_KEY` (e.g., using `from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())` in a Python shell).
    ```
    DJANGO_SECRET_KEY=YOUR_GENERATED_SECRET_KEY_HERE DJANGO_DEBUG=False DJANGO_ALLOWED_HOSTS=your-site-name.alwaysdata.net
    ```
    *(Replace `YOUR_GENERATED_SECRET_KEY_HERE` and `your-site-name.alwaysdata.net` with your actual values)*

4.  **Static Paths:**
    *   Add this entry in the `Static paths` field:
    ```
    /static/=home/lon40seminarium-kotzian-oskar/szkola/staticfiles
    ```

5.  **Save Changes and Restart:**
    *   Click "Submit" (or Save) and then click the **"Restart"** button for your site.

## 4. Initial Deployment (Manual via SSH)

Since you used the `git clone` method, you need to manually perform the initial code pull and setup.

1.  **Connect to AlwaysData via SSH:**
    ```bash
    ssh lon40seminarium-kotzian-oskar@ssh-lon40seminarium-kotzian-oskar.alwaysdata.net
    ```
    *(Use your actual AlwaysData SSH hostname and username)*

2.  **Clean up previous project files (Optional, if `~/szkola` exists and is corrupted):**
    ```bash
    rm -rf /home/lon40seminarium-kotzian-oskar/szkola
    ```

3.  **Clone your project from GitHub:**
    ```bash
    git clone https://github.com/lon40seminarium-kotzian-oskar/lon40seminarium-kotzian-oskar-ale-moze-dziala /home/lon40seminarium-kotzian-oskar/szkola
    ```
    *(Replace `https://github.com/...` with your actual GitHub repository URL)*

4.  **Create/Recreate Virtual Environment (Crucial for Python version match):**
    ```bash
    rm -rf /home/lon40seminarium-kotzian-oskar/venv # Remove existing venv if any
    python3.11 -m venv /home/lon40seminarium-kotzian-oskar/venv
    ```
    *(Using `python3.11` ensures it matches the `3.11` chosen in the dashboard).*

5.  **Navigate to Project and Install Dependencies:**
    ```bash
    cd /home/lon40seminarium-kotzian-oskar/szkola
    source /home/lon40seminarium-kotzian-oskar/venv/bin/activate
    pip install -r requirements.txt
    ```

6.  **Perform Django Specific Setup:**
    ```bash
    python manage.py collectstatic --noinput
    python manage.py migrate
    ```

7.  **Deactivate and Exit SSH:**
    ```bash
    deactivate
    exit
    ```

8.  **Final Restart from Dashboard:** Go to your AlwaysData dashboard and **click the "Restart" button for your site again.**

## 5. Updating Your Application

To update your deployed application after making changes locally and pushing them to GitHub:

1.  **Commit and Push to GitHub (local machine):**
    ```bash
    # On your local machine:
    git add .
    git commit -m "Description of your changes"
    git push origin main
    ```

2.  **Update on AlwaysData (via SSH):**
    ```bash
    # SSH into AlwaysData:
    ssh lon40seminarium-kotzian-oskar@ssh-lon40seminarium-kotzian-oskar.alwaysdata.net

    # Navigate to project directory:
    cd /home/lon40seminarium-kotzian-oskar/szkola

    # Pull latest changes:
    git pull origin main

    # Activate venv and run post-pull commands:
    source /home/lon40seminarium-kotzian-oskar/venv/bin/activate
    pip install -r requirements.txt # Only needed if requirements.txt changed
    python manage.py collectstatic --noinput # If static files changed
    python manage.py migrate # If database models changed
    deactivate

    # Exit SSH:
    exit
    ```

3.  **Restart from AlwaysData Dashboard:**
    *   Go to your AlwaysData dashboard and click the **"Restart"** button for your site.

## 6. Checking Logs (Troubleshooting)

If your site shows "Bad Gateway" or behaves unexpectedly, check the uWSGI logs:

1.  **Connect to AlwaysData via SSH.**
2.  **View the log file:**
    ```bash
    cat /home/lon40seminarium-kotzian-oskar/admin/logs/uwsgi/1018369.log
    ```
    *(The log file name might vary slightly; use `ls -la /home/lon40seminarium-kotzian-oskar/admin/logs/uwsgi/` to find the correct one).*

## 7. Advanced: Automated Git Hook Deployment

For fully automated "deploy on `git push`" functionality, you can set up a `post-receive` Git hook on AlwaysData. This replaces the manual update steps. Refer to AlwaysData's documentation on Git hooks for a more advanced setup if you desire this automation in the future.