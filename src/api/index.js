export const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0]);
};

/**
 * wrapPromise -- a wrapper that wraps over a Promise and provides a method
 that allows you to determine whether the data being returned from
 the Promise is ready to be read.
 */
export const wrapPromise = promise => {
  let status = "pending";
  let result = "";

  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        // if the Promise is still pending, it throws back the Promise.
        throw suspender;
      } else if (status === "error") {
        // if the Promise rejects, it throws the error;
        throw result;
      }

      // if the Promise resolves, it returns the resolved data;
      return result;
    }
  };
};

export const randomNumberAndTimeout = (timeout) => {
  return new Promise(res =>
    setTimeout(() => res(timeout), timeout)
  );
};
