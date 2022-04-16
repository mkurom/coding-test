import './App.css';

export const App = () => {
  return (
    <div>
      <h1>TODOアプリ</h1>

      <form>
        <label>
          TODO:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="作成" />
      </form>
    </div>
  );
}