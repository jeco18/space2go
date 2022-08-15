import "./footer.css";

const Footer = () => {
  return (
    <div className="footer w-full border-t-2 border-t-gray-300 mt-32">
        <footer class="f-wrap w-9/12 mx-auto py-6 text-center lg:flex justify-between items-center">
            <p class="text-sm text-gray-500  dark:text-gray-400">© 2022 <a href="hotel2go.com" class="hover:underline">HoteL2Go™</a>. All Rights Reserved.
            </p>
            <ul class="fLists text-sm text-gray-500 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline ">Developers:</a>
                </li>
                <li>
                    <a href="https://quiton-portfolio.vercel.app/" class="mr-4 hover:underline">👨‍💻 Prince</a>
                </li>
                <li>
                    <a href="https://marvin-portfolio.vercel.app/" class="mr-4 hover:underline">👨‍💻 Marvin</a>
                </li>
                <li>
                    <a href="https://jerichobongay.vercel.app/" class="mr-4 hover:underline">👨‍💻 Jericho</a>
                </li>
            </ul>
        </footer>
    </div>
  );
};

export default Footer;
