import { wrapPromise, fetchPerson } from "../../api";

const resource = wrapPromise(fetchPerson());

const Request = () => {
  const person = resource.read();

  return (
    <div>
      <h1>{person.name.first}</h1>
    </div>
  );
};

export default Request;
