const commentsData = [
  {
    name: "Hrishik raj sahu",
    comment: "lorem ipsum dolor sit amet, consect",
    replies: [
      {
        name: "Hrishik raj sahu",
        comment: "lorem ipsum dolor sit amet, consect",
        replies: [
          {
            name: "Hrishik raj sahu",
            comment: "lorem ipsum dolor sit amet, consect",
            replies: [],
          },
          {
            name: "Hrishik raj sahu",
            comment: "lorem ipsum dolor sit amet, consect",
            replies: [],
          },
        ],
      },
      {
        name: "Hrishik raj sahu",
        comment: "lorem ipsum dolor sit amet, consect",
        replies: [],
      },
    ],
  },
  {
    name: "Hrishik raj sahu",
    comment: "lorem ipsum dolor sit amet, consect",
    replies: [
      {
        name: "Hrishik raj sahu",
        comment: "lorem ipsum dolor sit amet, consect",
        replies: [],
      },
    ],
  },
  {
    name: "Hrishik raj sahu",
    comment: "lorem ipsum dolor sit amet, consect",
    replies: [
      {
        name: "Hrishik raj sahu",
        comment: "lorem ipsum dolor sit amet, consect",
        replies: [
          {
            name: "Hrishik raj sahu",
            comment: "lorem ipsum dolor sit amet, consect",
            replies: [
              {
                name: "Hrishik raj sahu",
                comment: "lorem ipsum dolor sit amet, consect",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Hrishik raj sahu",
    comment: "lorem ipsum dolor sit amet, consect",
    replies: [
      {
        name: "Hrishik raj sahu",
        comment: "lorem ipsum dolor sit amet, consect",
        replies: [],
      },
    ],
  },
  {
    name: "Hrishik raj sahu",
    comment: "lorem ipsum dolor sit amet, consect",
    replies: [
      {
        name: "Hrishik raj sahu",
        comment: "lorem ipsum dolor sit amet, consect",
        replies: [],
      },
    ],
  },
];

const CommentTemplet = ({data}) => {

    const {name,comment} = data;

  return (
    <div className="flex shadow-md rounded-lg m-2">
      <img
        alt="profile"
        className="h-10 bg-gray-300 rounded-full m-2"
        src="https://static.thenounproject.com/png/854888-200.png"
      ></img>
      <div>
        <h2>{name}</h2>
        <h3>{comment}</h3>
      </div>
    </div>
  );
};

const CommentList=({comments,index})=>{

    return comments.map(comment => (
        <div ey={index}>
            <CommentTemplet k data = {comment} />
            <div className="ml-5 border-l-4">
            <CommentList comments = {comment.replies}></CommentList>
            </div>
           
        </div>
        )  
    )
}

const CommentContainer = () => {
  return (
    <>
      <h1 className="font-bold m-2">Comments:</h1>
      <CommentList comments = {commentsData}/>
    </>
  );
};

export default CommentContainer;
