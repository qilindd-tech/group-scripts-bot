# Secure Secrets Helper

This directory contains helper files and scripts for securely setting GitHub Actions secrets and for local environment setup.

## Files

- `scripts/set_github_secret.sh`: A script to set a GitHub secret named `BOT_TOKEN`.
- `scripts/create_env_local.sh`: A script to create a local `.env` file for environment variables.
- `.github/workflows/verify_secret.yml`: A GitHub Actions workflow to verify that the secret is set correctly.

## Important
Please ensure that you do not commit any real tokens to this repository.
