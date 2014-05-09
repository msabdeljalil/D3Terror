helpers do

  def current_user
    # session[:user_id] = 1
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
