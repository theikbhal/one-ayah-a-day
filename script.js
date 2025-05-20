const ayahs = [
  "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
  "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ...",
  "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا...",
  // Add remaining 27 ayahs
];

const todayIndex = (new Date().getDate() - 1) % 30;
document.getElementById('day').textContent = `Day ${todayIndex + 1}`;
document.getElementById('ayah').textContent = ayahs[todayIndex];

let readCount = 0;
let writeCount = 0;

function incrementRead() {
  if (readCount < 10) {
    readCount++;
    document.getElementById('readCount').textContent = readCount;
  }
}

function incrementWrite() {
  if (writeCount < 10) {
    writeCount++;
    document.getElementById('writeCount').textContent = writeCount;
  }
}

function markComplete() {
  if (readCount >= 10 && writeCount >= 10) {
    localStorage.setItem(`day${todayIndex + 1}_complete`, 'true');
    document.getElementById('completeStatus').textContent = '✅ Completed!';
  } else {
    alert('Please finish reading and writing 10 times each!');
  }
}
