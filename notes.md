When I open the web page, I don't see the next logo; and that is because I'm running at night.  Making the following change gets the icon to show up:

```diff
diff --git a/app/page.tsx b/app/page.tsx
index 54bcb72..2e04d1a 100644
--- a/app/page.tsx
+++ b/app/page.tsx
@@ -5,7 +5,7 @@ export default function Home() {
     <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
       <h1 className="text-2xl">Welcome to your Next.js app!</h1>
       <Image
-        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
+        className="relative"
         src="/next.svg"
         alt="Next.js Logo"
         width={180}
```

It probably is also worth adding a fly image:

```
curl https://fly.io/static/images/brand/brandmark-dark.svg -o public/flydotio.svg
```

```html
      <Image
        className="relative"
        src="/flydotio.svg"
        alt="Fly.io Logo"
        width={180}
        height={163}
        priority
      />
```

`gh secret set` defaults to repository, and we don't have one just yet.

I went into github, created a `rubys/next-app` repository, and then did the following:

```
git init
git add .
git commit -m "initial code"
git branch -M main
git remote add origin git@github.com:rubys/next-app.git
git push -u origin main
```

Next -- if you haven't already -- you need to install the [GitHub CLI](https://github.com/cli/cli?tab=readme-ov-file#installation)

At this point, I can set a repository secret.  It looks like the correct way to create a gh secret would be:

```
fly auth token | gh secret set FLY_API_TOKEN
```

Alternately, github repository secrets can be set using the [web ui](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions?tool=webui#creating-secrets-for-a-repository).

I recommend you make the fly launch command as follows:

```
fly launch --name next-app-$USER-$RANDOM
```

And then instead of suggesting that they change the name in the `fly.toml`, tell them that they can pick whatever name they like at launch time, it just has to be unique.
