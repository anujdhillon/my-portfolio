import React from 'react';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentList:[],
            activeItem: {
                id:null,
                content: '',
                author: '',
            },
            editing: false,
        }
        this.fetchComments = this.fetchComments.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.postComment = this.postComment.bind(this);
        this.getCookie = this.getCookie.bind(this)

    };

    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    componentDidMount(){
        this.fetchComments();
    }

    fetchComments(){
        fetch('https://anujdhillon.herokuapp.com/api/comment-list/')
        .then(response => response.json())
        .then(data =>
            this.setState({
                commentList: data
            }
            )
        )
    }

    handleContentChange(e){
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                content:value
            }
        })
    }
    handleAuthorChange(e){
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                author:value
            }
        })
    }

    postComment(){
        var csrftoken = this.getCookie('csrftoken')
        var url = 'https://anujdhillon.herokuapp.com/api/comment-create/'
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
                'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify(this.state.activeItem)
        }).then((response) => {
            console.log(this.state.activeItem)
            this.fetchComments()
            this.setState({
                activeItem: {
                    id:null,
                    content: '',
                    author: '',
                }
            })
        }).catch(function(error){
            console.log("Error: ", error)
        })
    }



    render() { 
        var comments = this.state.commentList;
        return (
        <div className="comment-box">
                <div className="write-area">
                    <div className="inputtext">
                        <textarea type="text"  maxlength="200" id="content" name="content" placeholder="Write comment..." value = {this.state.activeItem.content} onChange={this.handleContentChange}/>
                        <textarea type="text"  maxlength="200" id="author" name="author" placeholder="Write your name..." value = {this.state.activeItem.author} onChange={this.handleAuthorChange}/>
                    </div>
                    <div className="submit-button">
                        <button onClick={ () => this.postComment() } className="btn">Send</button>
                    </div>
                </div>
                <div className="display-area">
                {
                    comments.map((item) =>{
                        return <div className="comment">
                                <div className="comment-info">
                                    <span className="comment-author">{ item.author }</span>
                                    <p>
                                        {item.date_created}
                                    </p>
                                </div>
                                <div className="comment-body">
                                    <p>
                                    { item.content}
                                    </p>
                                </div>            
                   </div>
                    })
                }
                </div>
            </div>
        )
    }
}
export default CommentSection;