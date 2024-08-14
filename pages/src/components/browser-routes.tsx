// import { useState, useLayoutEffect } from "react";
// import history from "@history";
// import { Router } from "react-router-dom";

// function BrowserRouter({ basename, children, window }) {
//   const [state, setState] = useState({
//     action: history.action,
//     location: history.location,
//   });

//   /* TODO: if gives error uncomment below line */
//   // useLayoutEffect(() => history.listen(setState), [history]);
//   useLayoutEffect(() => history.listen(setState), []);

//   return (
//     <Router
//       basename={basename}
//       location={state.location}
//       navigationType={state.action}
//       navigator={history}
//     >
//       {children}
//     </Router>
//   );
// }

// export default BrowserRouter;
