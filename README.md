# praktikum ui ux
Nama  : Aria Fatah Anom \
Rombel: TI07

## tugas praktikum
- [sc_tugas_praktikum_1](https://github.com/ariafatah0711/praktikum_uiux/tree/main/01_praktikum_cv) - [preview](https://ariaf.my.id/praktikum_uiux/01_praktikum_cv)
- [sc_tugas_praktikum_2_cart](https://github.com/ariafatah0711/praktikum_uiux/tree/main/02_praktikum_cart) - [preview](https://ariaf.my.id/praktikum_uiux/02_praktikum_cart)
- [sc_tugas_praktikum_2_form](https://github.com/ariafatah0711/praktikum_uiux/tree/main/02_praktikum_form) - [preview](https://ariaf.my.id/praktikum_uiux/02_praktikum_form)
- [sc_tugas_praktikum_3_web_profile](https://github.com/ariafatah0711/praktikum_uiux/tree/main/03_praktikum_web_profile) - [preview](https://ariaf.my.id/praktikum_uiux/03_praktikum_web_profile)
- [sc_tugas_04_praktikum_css](https://github.com/ariafatah0711/praktikum_uiux/tree/main/04_praktikum_css) - [preview_burung](https://ariaf.my.id/praktikum_uiux/04_praktikum_css/burung.html)
- [sc_tugas_05_praktikum_box](https://github.com/ariafatah0711/praktikum_uiux/tree/main/05_praktikum_box) - [preview](https://ariaf.my.id/praktikum_uiux/05_praktikum_box)
- [sc_06_praktikum_flexbox](https://github.com/ariafatah0711/praktikum_uiux/tree/main/06_praktikum_flexbox) - [preview](https://ariaf.my.id/praktikum_uiux/06_praktikum_flexbox)

## latihan di kelas
- [sc_lat_praktikum_01](https://github.com/ariafatah0711/praktikum_uiux/tree/main/latihan/01) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/01)
- [sc_lat_praktikum_02](https://github.com/ariafatah0711/praktikum_uiux/tree/main/latihan/02) - [preview](https://ariaf.my.id/praktikum_uiux/latihan/02)
- [sc_lat_praktikum_03](https://github.com/ariafatah0711/praktikum_uiux/tree/main/latihan/03)
  - [preview layout](https://ariaf.my.id/praktikum_uiux/latihan/03/)
  - [preview frame](https://ariaf.my.id/praktikum_uiux/latihan/03/home.html)
- [sc_lat_praktikum_04](https://github.com/ariafatah0711/praktikum_uiux/blob/main/latihan/04/alpukat.html) - [preview_alpukat](https://ariaf.my.id/praktikum_uiux/latihan/04/alpukat.html)
- [sc_lat_praktikum_05](https://github.com/ariafatah0711/praktikum_uiux/blob/main/latihan/05/)
  - [preview_box_1](https://ariaf.my.id/praktikum_uiux/latihan/05/01_box.html)
  - [preview_box_2](https://ariaf.my.id/praktikum_uiux/latihan/05/02_box.html)
  - [preview_box_gambar_2](https://ariaf.my.id/praktikum_uiux/latihan/05/03_gambar.html)
- [sc_lat_praktikum_06](https://ariaf.my.id/praktikum_uiux/latihan/06/)

---

## Catetan

<details>
<summary><b>Membuat Branch Baru dari Folder Tertentu</b></summary>

```bash
# === Konfigurasi Variabel ===
$REPO_URL = "https://github.com/ariafatah0711/praktikum_uiux.git"
$FOLDER_NAME = "06_praktikum_flexbox"
$BRANCH_NAME = "praktikum_06"
$TEMP_DIR = "tugas_clean"

# === Eksekusi ===
Write-Host "🌀 Cloning repository..."
git clone $REPO_URL $TEMP_DIR

Set-Location $TEMP_DIR

Write-Host "✅ Checkout ke branch main..."
git checkout main

Write-Host "🔍 Filter repo hanya folder $FOLDER_NAME..."
git filter-repo --subdirectory-filter $FOLDER_NAME --force

Write-Host "🌿 Buat branch baru $BRANCH_NAME..."
git checkout -b $BRANCH_NAME

Write-Host "🔗 Tambahkan remote origin..."
git remote add origin $REPO_URL

Write-Host "🚀 Push branch hasil filter ke GitHub..."
git push -u origin $BRANCH_NAME --force

Set-Location ..

Write-Host "🧹 Hapus repo lokal..."
Remove-Item -Recurse -Force .\$TEMP_DIR

Write-Host "🎉 Selesai! Branch $BRANCH_NAME sudah di-push ke repo."
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

<details>
<summary><b>Template Readme</b></summary>

```md
# praktikum 1
### Nama  : Aria Fatah Anom
### Rombel: TI07

repo  : https://github.com/ariafatah0711/praktikum_uiux \
branch: praktikum_01

url   : https://github.com/ariafatah0711/praktikum_uiux/tree/praktikum_01 \
demo  : https://ariaf.my.id/praktikum_uiux/01_praktikum_cv

### use
```bash
git clone --branch praktikum_01 --single-branch https://github.com/ariafatah0711/praktikum_uiux.git praktikum_01_aria
```
```

</details>
