# praktikum ui ux
Nama  : Aria Fatah Anom \
Rombel: TI07

## tugas praktikum
- [sc_tugas_praktikum_1](./praktikum_01) - [preview](https://ariaf.my.id/praktikum_uiux/01_praktikum_cv)
- [sc_tugas_praktikum_2_cart](./praktikum_02_cart) - [preview](https://ariaf.my.id/praktikum_uiux/02_praktikum_cart)
- [sc_tugas_praktikum_2_form](./praktikum_02_form) - [preview](https://ariaf.my.id/praktikum_uiux/02_praktikum_form)
- [sc_tugas_praktikum_3_web_profile](./praktikum_03_web_profile) - [preview](https://ariaf.my.id/praktikum_uiux/03_praktikum_web_profile)
- [sc_tugas_04_praktikum_css](./04_praktikum_css) - [preview_burung](https://ariaf.my.id/praktikum_uiux/04_praktikum_css/burung.html)

## latihan di kelas
- [sc_lat_praktikum_01](./main/latihan/01) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/01)
- [sc_lat_praktikum_02](./main/latihan/02) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/02)
- [sc_lat_praktikum_03](./main/latihan/03)
  - [preview layout](https://ariaf.my.id/praktikum_uiux/latihan/03/)
  - [preview frame](https://ariaf.my.id/praktikum_uiux/latihan/03/home.html)
- [sc_lat_praktikum_04](./latihan/04/alpukat.html) - [preview_alpukat](https://ariaf.my.id/praktikum_uiux/latihan/04/alpukat.html)

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
