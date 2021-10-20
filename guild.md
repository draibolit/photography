### Update
- Update homepage background image: in file hero.scss
- To add, remove or modify categories, edit the file:
./src/pages/portfolio/portfolio.cmp.jsx
- Files in the same category in cloudinary need to have tag named the same as 
the title of the coresponding section in the file:
./src/pages/portfolio/portfolio.cmp.jsx

### Deployment
- Run command:
```
npm run build
npm run add-domain
npm run deploy
```
- Need to setup the custom domain again each deployment time
https://github.com/tschaub/gh-pages/issues/213
