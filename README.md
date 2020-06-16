# slack_note
Slack app for execute CRUD operation via slack slash command

## Usage
1. ngrokを起動

    ```
    ngrok http 3000
    ```

2. slack slash Commandを編集
slack slash command管理画面で、Request URLをngrokのforwardingに記載されているURLに変更する。

3. node.jsアプリケーションを起動
    ```
    nodemon
    ```