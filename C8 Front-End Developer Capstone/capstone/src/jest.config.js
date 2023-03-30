// module.exports = {
//     transform: {
//       '^.+\\.jsx?$': 'babel-jest'
//     },

//       transformIgnorePatterns: [
//     "/node_modules/(?!my-module)"
//   ]
//   };

export default {
  // ...
  extensionsToTreatAsEsm: [".js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!(react-datepicker)/)"],
};
