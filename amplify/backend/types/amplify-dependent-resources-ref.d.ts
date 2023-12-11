export type AmplifyDependentResourcesAttributes = {
  "api": {
    "quotes": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "services": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "function": {
    "handleQuotes": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "handleServices": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}