# Pages Functions with a functions/ folder

If you use Pages Functions with a folder of functions/, you must first compile these functions into a single Worker script with the wrangler pages functions build command.

`npx wrangler pages functions build --outdir=./dist/worker/`

Although this command will remain available to you to run at any time, we do recommend considering using another framework if you wish to continue to use file-based routing. HonoX is one popular option.

Once the Worker script has been compiled, you can update your configuration file's main field to point to the location it was built to:

```toml
name = "my-worker"
compatibility_date = "2025-04-01"
main = "./dist/worker/index.js"

[assets]
directory = "./dist/client/"
```
