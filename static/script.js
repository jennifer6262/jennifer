// 예시용 임시 데이터 (학번-이름 → ID, PW 매핑)
const accountData = [
  { studentId: '20230123', studentName: '홍길동', id: 'honggildong@edupass.kr', pw: 'pass1234' },
  { studentId: '20230124', studentName: '김민지', id: 'kimminji@edupass.kr', pw: 'pw5678' },
  { studentId: '20230125', studentName: '이수민', id: 'leesumin@edupass.kr', pw: 'sm2023pw' },
  // 필요시 더 추가 가능
];

document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 기본 제출 막기

  const studentId = document.getElementById('studentId').value.trim();
  const studentName = document.getElementById('studentName').value.trim();

  // 입력값이 있는지 확인
  if (!studentId || !studentName) {
    alert('학번과 이름을 모두 입력해주세요.');
    return;
  }

  // 데이터에서 해당 학생 찾기
  const account = accountData.find(
    entry => entry.studentId === studentId && entry.studentName === studentName
  );

  const resultBox = document.getElementById('result');
  const idSpan = document.getElementById('accountId');
  const pwSpan = document.getElementById('accountPw');

  if (account) {
    idSpan.textContent = account.id;
    pwSpan.textContent = account.pw;
    resultBox.classList.remove('hidden');
  } else {
    resultBox.classList.add('hidden');
    alert('일치하는 계정 정보가 없습니다. 학번과 이름을 다시 확인해주세요.');
  }
});