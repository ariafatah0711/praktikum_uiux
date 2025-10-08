# praktikum ui ux
Nama: Aria Fatah Anom

## tugas praktikum
- [sc_tugas_praktikumm_1](./01_praktikum_cv/) - [preview](https://ariaf.my.id/praktikum_uiux/01_praktikum_cv)

## latihan di kelas
- [sc_lat_praktikum_01](./latihan/01/) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/01)
- [sc_lat_praktikum_02](./latihan/02/) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/02)

---

### add your folder to another branch
```bash
git remote add origin https://github.com/ariafatah0711/praktikum_uiux.git
cd tugas_clean

git checkout main
git filter-repo --subdirectory-filter 01_praktikum_cv --force
git checkout -b praktikum_01

git remote add origin https://github.com/ariafatah0711/praktikum_uiux.git
git push origin praktikum_01
```

delete;
```bash
git checkout main
git branch -D praktikum_01
git push origin --delete praktikum_01
```
