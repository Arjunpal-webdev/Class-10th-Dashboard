// Sample data - replace with your own class records
const students = [
  { name: "Aarav Sharma",  maths: 92, science: 88, english: 85, present: true },
  { name: "Diya Verma",    maths: 95, science: 91, english: 89, present: true },
  { name: "Rohan Gupta",   maths: 74, science: 69, english: 72, present: false },
  { name: "Ananya Singh",  maths: 88, science: 93, english: 90, present: true },
  { name: "Kabir Yadav",   maths: 61, science: 58, english: 66, present: true },
  { name: "Isha Agarwal",  maths: 83, science: 79, english: 91, present: true },
  { name: "Vihaan Mishra", maths: 70, science: 75, english: 68, present: false },
  { name: "Saanvi Joshi",  maths: 97, science: 94, english: 93, present: true },
  { name: "Arjun Pandey",  maths: 55, science: 62, english: 59, present: true },
  { name: "Meera Chauhan", maths: 79, science: 84, english: 80, present: true },
  { name: "Aditya Rathore",maths: 66, science: 71, english: 64, present: false },
  { name: "Kavya Tiwari",  maths: 90, science: 86, english: 87, present: true }
];

function render() {
  const total = students.length;
  const present = students.filter(s => s.present).length;

  document.getElementById("total").textContent = total;
  document.getElementById("present").textContent = present;
  document.getElementById("absent").textContent = total - present;

  document.getElementById("today").textContent = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  const ranked = students
    .map(s => ({ ...s, total: s.maths + s.science + s.english }))
    .sort((a, b) => b.total - a.total);

  const body = document.getElementById("marks-body");
  body.innerHTML = "";

  ranked.forEach((s, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${s.name}</td>
      <td class="num">${s.maths}</td>
      <td class="num">${s.science}</td>
      <td class="num">${s.english}</td>
      <td class="num total">${s.total}</td>
      <td><span class="badge ${s.present ? "present" : "absent"}">${s.present ? "Present" : "Absent"}</span></td>
    `;
    body.appendChild(tr);
  });
}

render();