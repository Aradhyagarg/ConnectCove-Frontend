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
    console.log(error);
    dispatch({
      type: "LoginFailure",
      payload: error.response?.data?.message || "Something went wrong",
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
      console.log(error);
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
    console.log(error);
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

    const { data } = await axios.get("/api/v1/posts");
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
    console.log(error);
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({
      type: "updatePasswordRequest",
    });

    const { data } = await axios.put(
      "/api/v1/update/password",
      { oldPassword, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    dispatch({
      type: "updatePasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "updatePasswordFailure",
      payload: error.response.data.message,
    });
  }
};


export const getAllUsers = (name = "") => async (dispatch) => {
  try {
    dispatch({
      type: "allUsersRequest",
    });

    const { data } = await axios.get(`/api/v1/users?name=${name}`);
    dispatch({
      type: "allUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "allUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteMyProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserRequest",
    });
    const { data } = await axios.delete("/api/v1/delete/me");
    dispatch({
      type: "deleteUserSuccess",
      payload: data.message,
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: "deleteUserFailure",
    })
  }
}

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
    console.log(error);
    dispatch({
      type: "myPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "userPostsRequest",
    });

    const { data } = await axios.get(`/api/v1/userposts/${id}`);
    dispatch({
      type: "userPostsSuccess",
      payload: data.posts,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "userPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "forgotPasswordRequest",
    });

    const { data } = await axios.post(
      "/api/v1/forget/password",
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "forgotPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "forgotPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "userProfileRequest",
    });
    const { data } = await axios.get(`/api/v1/user/${id}`, {
      id
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "userProfileSuccess",
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "userProfileFailure",
      payload: error.response.data.message,
    });
  }
}

export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "followUserRequest",
    });
    const { data } = await axios.get(`/api/v1/follow/${id}`);
    dispatch({
      type: "followUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "followUserFailure",
      payload: error.response.data.message,
    })
  }
}

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({
      type: "resetPasswordRequest",
    });

    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      {
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "resetPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });
    await axios.get('/api/v1/logout');
    dispatch({
      type: "LogoutUserSuccess",
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
}