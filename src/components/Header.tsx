import MovieSearchInput from "@/components/MovieSearchInput";

const backgroundImage =
  "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/327742667_1623014334796829_773355245454316339_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pIuc3WrZuJoAX9xzJdv&_nc_ht=scontent-cdg4-2.xx&oh=00_AfDlQwh1e4JfZCUXGEi0j3YvQu4AsW3XNx1ybJshqPI5bw&oe=647FAE59";

interface PropsFunction {
  onSubmit: (value: string) => void;
}

const windowSize = window.innerWidth;
const allowRender = windowSize > 500;

const Header: React.FC<PropsFunction> = ({ onSubmit }) => {
  return (
    <div className="header">
      {allowRender && <h1 className="header__title">My Movies App</h1>}
      <MovieSearchInput onSubmit={onSubmit} />
      {allowRender && (
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="header__picture-container"
        />
      )}
    </div>
  );
};

export default Header;
