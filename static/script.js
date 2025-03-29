// 예시용 임시 데이터 (학번-이름 → ID, 이메일 매핑)
const accountData = [
  { studentId: '1101', studentName: '홍길동', id: 'honggildong', email: 'honggildong@school.kr' },
  { studentId: '1916', studentName: '김민지', id: 'kimminji', email: 'kimminji@school.kr' },
  { studentId: '1917', studentName: '이수민', id: 'leesumin', email: 'leesumin@school.kr' }
];

document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 기본 제출 막기

  const studentId = document.getElementById('studentId').value.trim();
  const studentName = document.getElementById('studentName').value.trim();

  if (!studentId || !studentName) {
    alert('학번과 이름을 모두 입력해주세요.');
    return;
  }

  const account = accountData.find(
    entry => entry.studentId === studentId && entry.studentName === studentName
  );

  const resultBox = document.getElementById('result');
  const idSpan = document.getElementById('accountId');
  const emailSpan = document.getElementById('accountEmail');

  if (account) {
    idSpan.textContent = account.id;
    emailSpan.textContent = account.email;
    resultBox.classList.remove('hidden');
  } else {
    resultBox.classList.add('hidden');
    alert('일치하는 계정 정보가 없습니다. 학번과 이름을 다시 확인해주세요.');
  }
});
