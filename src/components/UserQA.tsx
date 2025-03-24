import React from "react";
import "../styles/UserQA.scss";

interface Question {
    id: number;
    user: string;
    content: string;
}

const mockQuestions: Question[] = [
    { id: 1, user: "Nguyễn Văn A", content: "Truyện nào hay nhất tháng này?" },
    { id: 2, user: "Trần Thị B", content: "Có truyện nào thể loại kinh dị không?" },
];

const UserQA: React.FC = () => {
    return (
        <div className="user-qa">
            <h4>Hỏi đáp từ người dùng</h4>
            <ul>
                {mockQuestions.map((q) => (
                    <li key={q.id}>
                        <strong>{q.user}:</strong> {q.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserQA;
