let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd /mnt/linuxdisk/localdev/temp/react-photography-page
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
edit src/components/item-home/item-home.cmp.jsx
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt src/pages/about/about.cmp.jsx
setlocal fdm=marker
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 21 - ((20 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
21
normal! 0
lcd /mnt/linuxdisk/localdev/temp/react-photography-page
tabnext 1
badd +58 /mnt/linuxdisk/localdev/temp/react-photography-page/src/pages/homepage/homepage.cmp.jsx
badd +1 /mnt/linuxdisk/localdev/temp/react-photography-page/src/pages/homepage/homepage.scss
badd +6 /mnt/linuxdisk/localdev/temp/react-photography-page/src/index.js
badd +11 /mnt/linuxdisk/localdev/temp/react-photography-page/src/App.css
badd +6 /mnt/linuxdisk/localdev/temp/react-photography-page/src/index.css
badd +5 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/header/header.scss
badd +29 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/header/header.cmp.jsx
badd +27 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/burger/burger.scss
badd +12 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/nav/nav.cmp.jsx
badd +21 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/nav/nav.scss
badd +0 /mnt/linuxdisk/localdev/temp/react-photography-page/src/fonts.css
badd +1 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/burger/burger.cmp.jsx
badd +22 /mnt/linuxdisk/localdev/temp/react-photography-page/src/pages/about/about.scss
badd +31 /mnt/linuxdisk/localdev/temp/react-photography-page/src/pages/about/about.cmp.jsx
badd +82 /mnt/linuxdisk/localdev/temp/react-photography-page/src/pages/contact/contact.scss
badd +15 /mnt/linuxdisk/localdev/temp/react-photography-page/src/pages/contact/contact.cmp.jsx
badd +84 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/item-home/item-home.scss
badd +0 /mnt/linuxdisk/localdev/temp/react-photography-page/src/components/item-home/item-home.cmp.jsx
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=Ot
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
