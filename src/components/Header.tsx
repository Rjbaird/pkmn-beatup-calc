const Header = () => {
  return (
    <header class="flex flex-row">
      <h1 class="text-red-500">Pokemon Beat-up Calculator</h1>
      <a class="text-white" href="/about">
        About
      </a>
      <button class="text-orange-500">Toggle Dark Mode</button>
    </header>
  );
};

export default Header;
