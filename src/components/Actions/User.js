import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest",
        });

        const { data } = await axios.post(
            "/api/v1/login",
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        dispatch({
            type: "LoginSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message,
        });
    }
};

export const registerUser =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        "/api/v1/register",
        { name, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest"
        })
        const { data } = await axios.get("/api/v1/me");
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message
        })
    }
}

export const getFollowingPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: "postOfFollowingRequest",
        });

        const { data } = await axios.get("/api/v1/post");
        dispatch({
            type: "postOfFollowingSuccess",
            payload: data.posts,
        });
    } catch (error) {
        dispatch({
            type: "postOfFollowingFailure",
            payload: error.response.data.message,
        });
    }
};

export const updateProfile = (name, email, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });
  
      const { data } = await axios.put(
        "/api/v1/update/profile",
        { name, email, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFailure",
        payload: error.response.data.message,
      });
    }
  };

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: "allUsersRequest",
        });

        const { data } = await axios.get("/api/v1/users");
        dispatch({
            type: "allUsersSuccess",
            payload: data.users,
        });
    } catch (error) {
        dispatch({
            type: "allUsersFailure",
            payload: error.response.data.message,
        });
    }
};

/*export const getMyPosts = () => async (dispatch) => {
    try {
      dispatch({
        type: "myPostsRequest",
      });
  
      const { data } = await axios.get("/api/v1/my/posts");
      dispatch({
        type: "myPostsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "myPostsFailure",
        payload: error.response.data.message,
      });
    }
  };*/

  export const getMyPosts = () => async (dispatch) => {
    try {
      dispatch({
        type: "myPostsRequest",
      });
  
      const { data } = await axios.get("/api/v1/my/posts");
      dispatch({
        type: "myPostsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "myPostsFailure",
        payload: error.response.data.message,
      });
    }
  };

export const logoutUser = () => async(dispatch) => {
    try{
        dispatch({
            type: "LogoutUserRequest",
        });
        await axios.get('/api/v1/logout');
        dispatch({
            type: "LogoutUserSuccess",
        })
    }catch(error){
        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message,
        });
    }
}