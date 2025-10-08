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
# pastikan di main
git checkout main

# buat branch baru yang benar-benar kosong (tanpa riwayat)
git checkout --orphan praktikum_01

# hapus semua file di branch baru
git rm -rf .

# copy isi folder yang kamu mau dari main
git checkout main -- 01_praktikum_cv

# pindahkan isinya ke root
Move-Item 01_praktikum_cv\* -Destination .
Remove-Item -Recurse -Force 01_praktikum_cv

# commit dan push
git add .
git commit -m "Isi branch praktikum_01 hanya dari folder 01_praktikum_cv"
git push origin praktikum_01 --force
```

```bash
git checkout main
git filter-repo --subdirectory-filter 01_praktikum_cv --force
git checkout -b praktikum_01
git push origin praktikum_01
```

delete;
```bash
git checkout main
git branch -D praktikum_01
git push origin --delete praktikum_01
```
