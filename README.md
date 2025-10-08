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
git checkout main
git branch -D praktikum_01
git checkout -b praktikum_01

git sparse-checkout disable
git sparse-checkout init --cone

git sparse-checkout set 01_praktikum_cv

Move-Item 01_praktikum_cv\* -Destination .
Remove-Item -Recurse -Force 01_praktikum_cv

git add .
git commit -m "Branch praktikum_01 hanya berisi isi dari folder 01_praktikum_cv"

git push origin praktikum_01
```
