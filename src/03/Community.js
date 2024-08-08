import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Left from '../Compo/Left';
import Right from '../Compo/Right';
import './community.css';

function Community() {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/community')
      .then(response => response.json())
      .then(data => setBoards(data));
  }, []);

  return (
    <div className="flex h-screen">
      <div className="fixed left-0 top-0 w-1/5 h-full bg-gray-200">
        <Left />
      </div>
      <div className="fixed right-0 top-0 w-1/5 h-full bg-gray-200">
        <Right />
      </div>
      <div className="flex-1 ml-[20%] mr-[20%] p-10">
        <div className="font-bold text-2xl mt-6">
          너도 아파? 나도 아파!
        </div>
        <div className='mt-6'>
          <h1>- 게시글의 제목을 선택하면 상세정보를 확인하실 수 있습니다.</h1>
          <h1>- 로그인 후, 게시글을 작성할 수 있습니다.</h1>
          <h1>- 게시글의 작성자 본인 및 관리자만 해당 게시글을 수정 및 삭제할 수 있습니다.</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th className="text-center">번호</th>
              <th className="text-center">제목</th>
              <th className="text-center">작성자</th>
              <th className="text-center">작성일</th>
            </tr>
          </thead>
          <tbody>
            {boards.map((board, index) => (
              <tr key={board.boardId}>
                <td className="text-center">{index + 1}</td>
                <td 
                  className="cursor-pointer"
                  onClick={() => navigate(`/community/${board.boardId}`)}
                >
                  {board.title}
                </td>
                <td className="text-center">{board.username}</td>
                <td className="text-center">{new Date(board.createDate).toLocaleDateString()} {new Date(board.createDate).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <button className="sign-button mb-16" onClick={() => navigate("/community/write")}>
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;