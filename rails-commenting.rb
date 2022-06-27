# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Rails created a controller where all of our method will be. Without this there wouldn't be any interaction between the page and the user. 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Index method will show all the data in the database so all of the posts will show on the screen 
    @posts = BlogPost.all
  end

  # ---3)
  # The show method will return only one piece of data, we can get that piece of data by using the id on the route. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # new creates a new object with all the fields of Blogpost 

  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
     # create method will create a new post or a new instance, if its valid redirect us to the new post, if its not valid it will redirect us to create it again
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
  #  The edith method edits a post or an instance, edit need a param of an id on the route to specify what instance we wan to edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #  It updates a blog post, it needs params to find the right post and its saying that if the post we are trying to update is valid were good if not then we will be redirected.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #  Destroy method will delete a post or instance, this part is saying that if we are not able to delete it we will be redirected to the same post 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # private does not not show on the page, so the method below will not be visible to the user 
  private
  def blog_post_params
    # ---10)
    # this methos is saying that in order to be able to create post we need to have this params 
    params.require(:blog_post).permit(:title, :content)
  end
end
