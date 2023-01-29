import { gql, useQuery } from "@apollo/client";

const ME = gql`
  query me {
    user(login: "ryogo-ito") {
      name
      avatarUrl
    }
  }
`;

interface User {
  name: string;
  avatarUrl: string;
}

export const App = () => {
  const { data } = useQuery<User>(ME);

  if (!Boolean(data)) {
    console.log(data);
    return <div>dame</div>;
  }

  return (
    <>
      {data && (
        <h1
          style={{ backgroundColor: "red" }}
        >{`アカウント名は${data.name}`}</h1>
      )}
    </>
  );
};
