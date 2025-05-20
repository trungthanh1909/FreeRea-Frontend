import React, { useState } from 'react';
import '../type/CommentSection.scss';

interface Reply {
    id: number;
    text: string;
}

interface Comment {
    id: number;
    text: string;
    replies: Reply[];
}

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        const newId = Date.now();
        const comment: Comment = {
            id: newId,
            text: newComment,
            replies: [],
        };
        setComments([comment, ...comments]);
        setNewComment('');
    };

    const handleAddReply = (commentId: number, replyText: string) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: [...comment.replies, { id: Date.now(), text: replyText }],
                    }
                    : comment
            )
        );
    };

    const visibleComments = expanded ? comments : comments.slice(0, 3);

    return (
        <div className="comments">
            <h3>Bình luận</h3>
            <div className="comment-box">
        <textarea
            placeholder="Viết bình luận..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        />
                <button onClick={handleAddComment}>Đăng</button>
            </div>

            <div className="comment-list">
                {visibleComments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onReply={handleAddReply}
                    />
                ))}
            </div>


            {comments.length > 3 && (
                <div className="expand-toggle  ">
                    <button onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Hide...' : 'Show more...'}
                    </button>
                </div>
            )}

        </div>
    );
};

const CommentItem: React.FC<{
    comment: Comment;
    onReply: (id: number, reply: string) => void;
}> = ({ comment, onReply }) => {
    const [replyInput, setReplyInput] = useState('');
    const [expandedReply, setExpandedReply] = useState(false);

    const visibleReplies = expandedReply ? comment.replies : comment.replies.slice(0, 1);

    return (
        <div className="comment-item">
            <div className="main-comment">
                <div className="avatar" />
                <div className="comment-text">{comment.text}</div>
            </div>

            <div className="reply-list">
                {visibleReplies.map((reply) => (
                    <div key={reply.id} className="reply-item">
                        <div className="avatar small" />
                        <div className="reply-text">{reply.text}</div>
                    </div>
                ))}

                {comment.replies.length > 1 && (
                    <div className="expand-toggle reply-toggle">
                        <button onClick={() => setExpandedReply(!expandedReply)}>
                            {expandedReply ? 'Hide....' : 'Show more....'}
                        </button>
                    </div>
                )}
            </div>

            <div className="reply-input-box">
                <input
                    type="text"
                    placeholder="Reply..."
                    value={replyInput}
                    onChange={(e) => setReplyInput(e.target.value)}
                />
                <button
                    onClick={() => {
                        if (replyInput.trim()) {
                            onReply(comment.id, replyInput);
                            setReplyInput('');
                        }
                    }}
                >
                    Trả lời
                </button>
            </div>
        </div>
    );
};


export default CommentSection;
