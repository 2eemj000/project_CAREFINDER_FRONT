import React from 'react';
import './qna.css';
import Left from '../Compo/Left.js'
import Right from '../Compo/Right.js'


function Qna() {
  const data = Array.from({ length: 10 }, (_, index) => ({
    번호: index + 1,
    제목: `제목 ${index + 1}`,
    작성자: `작성자 ${index + 1}`,
  }));

  return (
    <div className="flex h-screen">
    {/* 왼쪽 고정 */}
    <div className="fixed left-0 top-0 w-1/5 h-full bg-gray-200">
      <Left />
    </div>

    {/* 오른쪽 고정 */}
    <div className="fixed right-0 top-0 w-1/5 h-full bg-gray-200">
      <Right />
    </div>

    {/* 중앙 콘텐츠 */}
    <div className="flex-1 ml-[20%] mr-[20%] p-10">
      <div className="font-bold text-2xl mt-6">
      Q & A
      </div>
      <div className='mt-6'>
        <h1>- 게시글의 제목을 선택하면 상세정보를 확인하실 수 있습니다.</h1>
        <h1>- 로그인 후, 게시글을 작성할 수 있습니다.</h1>
        <h1>- 게시글은 수정 및 삭제할 수 없습니다. </h1>
        <h1>- 관리자만 답변등록 및 수정, 삭제할 수 있습니다. </h1>
      </div>
      <table>
        <thead>
          <tr>
            <th className="text-center">번호</th>
            <th className="text-center">제목</th>
            <th className="text-center">작성자</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.번호}>
              <td className="text-center">{item.번호}</td>
              <td>{item.제목}</td>
              <td className="text-center">{item.작성자}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
          <button className="sign-button mb-16">
            작성하기
          </button>
      </div>
    </div>
  </div>
  );
}

export default Qna;  