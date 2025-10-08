# praktikum ui ux
Nama: Aria Fatah Anom

## tugas praktikum
- [sc_tugas_praktikum_1](https://github.com/ariafatah0711/praktikum_uiux/tree/praktikum_01) <!-- - [branch](https://github.com/ariafatah0711/praktikum_uiux/tree/praktikum_01) --> - [preview](https://ariaf.my.id/praktikum_uiux/01_praktikum_cv)

## latihan di kelas
- [sc_lat_praktikum_01](https://github.com/ariafatah0711/praktikum_uiux/tree/main/latihan/01) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/01)
- [sc_lat_praktikum_02](https://github.com/ariafatah0711/praktikum_uiux/tree/main/latihan/01) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/02)

---

## Catetan
<details>
  <summary><b>Membuat Branch Baru dari Folder Tertentu</b></summary>

```bash
# clone repo bersih
git clone https://github.com/ariafatah0711/praktikum_uiux.git tugas_clean
cd tugas_clean

# pastikan di main
git checkout main

# filter repo jadi hanya folder 01_praktikum_cv
git filter-repo --subdirectory-filter 01_praktikum_cv --force

# buat branch baru dari hasil filter
git checkout -b praktikum_01

# tambahkan lagi remote
git remote add origin https://github.com/ariafatah0711/praktikum_uiux.git

# push branch hasil filter ke GitHub
git push -u origin praktikum_01 --force

# keluar dari folder dan hapus repo lokal
cd ..
Remove-Item -Recurse -Force .\tugas_clean
```
</details>

<details>
  <summary><b>Menghapus Branh</b></summary>

```bash
git checkout main
git branch -D praktikum_01
git push origin --delete praktikum_01
```

</details>
