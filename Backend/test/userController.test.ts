import UserController from "../src/controller/UserController";

let mockRequest: any;
let mockResponse: any;
let nextFunction: any;

nextFunction = jest.fn((err) => {
  return err;
});

mockResponse = {
  json: jest.fn(() => {
    return mockResponse;
  }),
  status: jest.fn(() => {
    return mockResponse;
  }),
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("AuthorizeUser", () => {
  test("throw error if code is empty", async () => {
    mockRequest = {
      params: { code: "" },
    };

    await UserController.AuthorizeUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Code"));
  });
  test("throw error if Enviroment variable ClientId is empty", async () => {
    mockRequest = {
      params: { code: "hh" },
    };
    process.env.GITHUB_OAUTH_CLIENTID = "";

    await UserController.AuthorizeUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(
      new Error("Github ClientId doesn't Exist!")
    );
  });

  test("throw error if Enviroment variable ClientSecret is empty", async () => {
    mockRequest = {
      params: { code: "hh" },
    };
    process.env.GITHUB_OAUTH_CLIENTID = "123";
    process.env.GITHUB_OAUTH_CLIENTSECRET = "";

    await UserController.AuthorizeUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(
      new Error("Github ClientSecret doesn't Exist!")
    );
  });
});

describe("GetAuthenticatedUser", () => {
  test("throw error if Authorization is empty", async () => {
    mockRequest = {
      headers: [
        {
          authorization: "",
        },
      ],
    };

    await UserController.GetAuthenticatedUser(
      mockRequest,
      mockResponse,
      nextFunction
    );

    expect(nextFunction).toReturnWith(new Error("Invalid Authorization"));
  });

  test("throw error if Token is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        authorization: "jhjh hjhj",
      },
    };

    await UserController.GetAuthenticatedUser(
      mockRequest,
      mockResponse,
      nextFunction
    );

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });
});

describe("Get User", () => {
  test("throw error if username is empty", async () => {
    mockRequest = {
      params: {
        username: "",
      },
    };
    await UserController.GetUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Username"));
  });

  test("throw error if Authorization is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: [
        {
          authorization: "",
        },
      ],
    };

    await UserController.GetUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Authorization"));
  });

  test("throw error if Token is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        authorization: "jhjh hjhj",
      },
    };

    await UserController.GetUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  //   test("Return status 200 all parameter are correct", async () => {
  //     mockRequest = {
  //       params: {
  //         username: "mehdizadeh-asma",
  //       },
  //       headers: {
  //         authorization: "Bearer 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",
  //       },
  //     };

  //     await UserController.GetUser(mockRequest, mockResponse, nextFunction);

  //     expect(mockResponse.json).toHaveBeenCalled();
  //     expect(mockResponse.status).toHaveBeenCalledWith(200);
  //   });
});

describe("Get Gists", () => {
  test("throw error if username is empty", async () => {
    mockRequest = {
      params: {
        username: "",
      },
    };
    await UserController.GetGists(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Username"));
  });

  test("throw error if Authorization is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: [
        {
          authorization: "",
        },
      ],
    };

    await UserController.GetGists(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Authorization"));
  });

  test("throw error if Token is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        authorization: "jhjh hjhj",
      },
    };

    await UserController.GetGists(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  // test("Return status 200 all parameter are correct", async () => {
  //   mockRequest = {
  //     params: {
  //       username: "mehdizadeh-asma",
  //     },
  //     headers: {
  //       authorization: "Bearer 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",
  //     },
  //   };

  //   await UserController.GetGists(mockRequest, mockResponse, nextFunction);

  //   expect(mockResponse.json).toHaveBeenCalled();
  //   expect(mockResponse.status).toHaveBeenCalledWith(200);
  // });
});

describe("Get Repos", () => {
  test("throw error if username is empty", async () => {
    mockRequest = {
      params: {
        username: "",
      },
    };
    await UserController.GetRepos(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Username"));
  });

  test("throw error if Authorization is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: [
        {
          authorization: "",
        },
      ],
    };

    await UserController.GetRepos(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Authorization"));
  });

  test("throw error if Token is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        authorization: "jhjh hjhj",
      },
    };

    await UserController.GetRepos(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  // test("Return status 200 all parameter are correct", async () => {
  //   mockRequest = {
  //     params: {
  //       username: "mehdizadeh-asma",
  //     },
  //     headers: {
  //       authorization: "Bearer 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",
  //     },
  //   };

  //   await UserController.GetRepos(mockRequest, mockResponse, nextFunction);

  //   expect(mockResponse.json).toHaveBeenCalled();
  //   expect(mockResponse.status).toHaveBeenCalledWith(200);
  // });
});

describe("Get Orgs", () => {
  test("throw error if username is empty", async () => {
    mockRequest = {
      params: {
        username: "",
      },
    };
    await UserController.GetOrgs(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Username"));
  });

  test("throw error if Authorization is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: [
        {
          authorization: "",
        },
      ],
    };

    await UserController.GetOrgs(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Authorization"));
  });

  test("throw error if Token is empty", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        authorization: "jhjh hjhj",
      },
    };

    await UserController.GetOrgs(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  // test("Return status 200 all parameter are correct", async () => {
  //   mockRequest = {
  //     params: {
  //       username: "mehdizadeh-asma",
  //     },
  //     headers: {
  //       authorization: "Bearer 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",
  //     },
  //   };

  //   await UserController.GetOrgs(mockRequest, mockResponse, nextFunction);

  //   expect(mockResponse.json).toHaveBeenCalled();
  //   expect(mockResponse.status).toHaveBeenCalledWith(200);
  // });
});
