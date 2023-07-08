import React, { useState } from 'react';
import { Tabs, Tab, Paper, IconButton, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CommentTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      text: 'Tolle Software!',
      category: 'Meinung',
      likes: 10,
      dislikes: 2,
      isFavorite: false,
      replies: [],
    },
    {
      id: 2,
      text: 'Die Daten werden nicht richtig angezeigt!',
      category: 'Debugging',
      likes: 5,
      dislikes: 3,
      isFavorite: false,
      replies: [],
    },
    {
      id: 3,
      text: 'Ich wünsche mir eine weitere x-Funktion innerhalb der x-Software.',
      category: 'Wunsch',
      likes: 7,
      dislikes: 1,
      isFavorite: false,
      replies: [],
    },
    {
      id: 4,
      text: 'Implementieren einer OpenAI-API innerhalb des eigenen Chat-Bots der Software.',
      category: 'Idee',
      likes: 7,
      dislikes: 1,
      isFavorite: false,
      replies: [],
    },
  ]);

  const [showMore, setShowMore] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replyCommentId, setReplyCommentId] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleLike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleDislike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          dislikes: comment.dislikes + 1,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleFavorite = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          isFavorite: !comment.isFavorite,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleLikeReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return {
              ...reply,
              likes: reply.likes + 1,
            };
          }
          return reply;
        });
        return {
          ...comment,
          replies: updatedReplies,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleDislikeReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return {
              ...reply,
              dislikes: reply.dislikes + 1,
            };
          }
          return reply;
        });
        return {
          ...comment,
          replies: updatedReplies,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleFavoriteReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return {
              ...reply,
              isFavorite: !reply.isFavorite,
            };
          }
          return reply;
        });
        return {
          ...comment,
          replies: updatedReplies,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReply = (commentId) => {
    const newReply = {
      id: new Date().getTime(),
      text: replyText,
      likes: 0,
      dislikes: 0,
      isFavorite: false,
    };
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });
    setComments(updatedComments);
    setReplyText('');
    setReplyCommentId(null);
  };

  const handleCancelReply = () => {
    setReplyText('');
    setReplyCommentId(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCommentFeed = () => {
    let filteredComments = comments.filter((comment) =>
      comment.text.toLowerCase().includes(searchText.toLowerCase())
    );
    if (categoryFilter) {
      filteredComments = filteredComments.filter(
        (comment) => comment.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    const limitedComments = showMore ? filteredComments : filteredComments.slice(0, 2);

    const CustomButton = styled(Button)({
      borderRadius: '20px',
      background: '#45A423FF',
      color: '#FFFFFF',
      padding: '5px 10px',
      transition: 'all 0.3s',
      '&:hover': {
        background: '#2F7E2EFF',
      },
    });

    const handleLikeReply = (commentId, replyId) => {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return {
                ...reply,
                likes: reply.likes + 1,
              };
            }
            return reply;
          });
          return {
            ...comment,
            replies: updatedReplies,
          };
        }
        return comment;
      });
      setComments(updatedComments);
    };

    const handleDislikeReply = (commentId, replyId) => {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return {
                ...reply,
                dislikes: reply.dislikes + 1,
              };
            }
            return reply;
          });
          return {
            ...comment,
            replies: updatedReplies,
          };
        }
        return comment;
      });
      setComments(updatedComments);
    };

    const handleFavoriteReply = (commentId, replyId) => {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return {
                ...reply,
                isFavorite: !reply.isFavorite,
              };
            }
            return reply;
          });
          return {
            ...comment,
            replies: updatedReplies,
          };
        }
        return comment;
      });
      setComments(updatedComments);
    };

    return (
      <div>
        {limitedComments.map((comment) => (
          <div key={comment.id}>
            <p style={{ fontFamily: 'Poppins' }}>{comment.text}</p>
            <p>Kategorie: {comment.category}</p>
            <IconButton onClick={() => handleLike(comment.id)}>
              <ThumbUpIcon />
            </IconButton>
            <IconButton onClick={() => handleDislike(comment.id)}>
              <ThumbDownIcon />
            </IconButton>
            <IconButton onClick={() => handleFavorite(comment.id)}>
              {comment.isFavorite ? (
                <FavoriteIcon style={{ color: 'red' }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <div>
              {comment.replies.map((reply) => (
                <div key={reply.id}>
                  <p>{reply.text}</p>
                  <IconButton onClick={() => handleLikeReply(comment.id, reply.id)}>
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDislikeReply(comment.id, reply.id)}>
                    <ThumbDownIcon />
                  </IconButton>
                  <IconButton onClick={() => handleFavoriteReply(comment.id, reply.id)}>
                    {reply.isFavorite ? (
                      <FavoriteIcon style={{ color: 'red' }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </div>
              ))}
              {replyCommentId === comment.id ? (
                <div>
                  <TextField
                    label="Antwort schreiben"
                    value={replyText}
                    onChange={handleReplyChange}
                  />
                  <Button onClick={() => handleReply(comment.id)}>Senden</Button>
                  <Button onClick={handleCancelReply}>Abbrechen</Button>
                </div>
              ) : (
                <Button onClick={() => setReplyCommentId(comment.id)}>
                  Auf diesen Kommentar antworten
                </Button>
              )}
            </div>
          </div>
        ))}
        {filteredComments.length > 2 && (
          <div style={{ textAlign: 'center' }}>
            <CustomButton onClick={toggleShowMore}>
              {showMore ? 'Weniger Anzeigen' : 'Mehr Anzeigen'}
            </CustomButton>
          </div>
        )}
      </div>
    );
  };

  const renderSearch = () => {
    // Render the search functionality with comment search and category filter
    // You can replace this with your own implementation
    return (
      <div>
        <TextField
          label="Suche"
          value={searchText}
          onChange={handleSearchChange}
        />
        <TextField
          label="Kategorie"
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
        />
      </div>
    );
  };

  const renderFavorites = () => {
    const favoriteComments = comments.filter((comment) => comment.isFavorite);

    return (
      <div>
        {favoriteComments.length === 0 ? (
          <p>Keine Favoriten.</p>
        ) : (
          favoriteComments.map((comment) => (
            <div key={comment.id}>
              <p style={{ fontFamily: 'Poppins' }}>{comment.text}</p>
              <p>Kategorie: {comment.category}</p>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <Paper style={{ width: '100%', backgroundColor: '#fff' }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        style={{ justifyContent: 'space-between' }}
      >
        <Tab
          icon={<CommentIcon />}
          style={{ flex: 1, fontFamily: 'Poppins', color: '#00a64a' }}
        />
        <Tab
          icon={<SearchIcon />}
          style={{ flex: 1, fontFamily: 'Poppins', color: '#00a64a' }}
        />
        <Tab
          icon={<FavoriteBorderIcon />}
          style={{ flex: 1, fontFamily: 'Poppins', color: '#00a64a' }}
        />
      </Tabs>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        {activeTab === 0 && renderCommentFeed()}
        {activeTab === 1 && renderSearch()}
        {activeTab === 2 && renderFavorites()}
      </div>
    </Paper>
  );
};

export default CommentTabs;











