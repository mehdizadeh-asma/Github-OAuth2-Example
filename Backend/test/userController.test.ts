import { NextFunction } from "express";
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
          Authorization: "",
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
        Authorization: "jhjh hjhj",
      },
    };

    await UserController.GetUser(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  test("Return status 200 all parameter are correct", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        Authorization: "Bearer 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",
      },
    };

    await UserController.GetUser(mockRequest, mockResponse, nextFunction);

    expect(mockResponse.json).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
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
          Authorization: "",
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
        Authorization: "jhjh hjhj",
      },
    };

    await UserController.GetGists(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  test("Return status 200 all parameter are correct", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        Authorization: "Bearer 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",
      },
    };

    await UserController.GetGists(mockRequest, mockResponse, nextFunction);

    expect(mockResponse.json).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
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
          Authorization: "",
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
        Authorization: "jhjh hjhj",
      },
    };

    await UserController.GetRepos(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  test("Return status 200 all parameter are correct", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        Authorization: "Bearer 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",
      },
    };

    await UserController.GetRepos(mockRequest, mockResponse, nextFunction);

    expect(mockResponse.json).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
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
          Authorization: "",
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
        Authorization: "jhjh hjhj",
      },
    };

    await UserController.GetOrgs(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toReturnWith(new Error("Invalid Token"));
  });

  test("Return status 200 all parameter are correct", async () => {
    mockRequest = {
      params: {
        username: "mehdizadeh-asma",
      },
      headers: {
        Authorization: "Bearer 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",
      },
    };

    await UserController.GetOrgs(mockRequest, mockResponse, nextFunction);

    expect(mockResponse.json).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
});
