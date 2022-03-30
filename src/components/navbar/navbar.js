export const Navbar=()=>{
    return (
        <header class="e-com-header">
        <nav class="e-com-navbar shop-nav ecom-bg-blue">
            <a href="">
                <div class="ecom-white">showTube</div>
            </a>
            <ul class="e-com-nav-items">
            </ul>
            <input type="text" class="search-input ecom-search" placeholder="search" />
            <div class="e-com-social">
                <div class="ecom-login-container">
                    <a href="/ecom-login/ecom-login.html">
                        <button class="login-btn ecom-bg-white ecom-blue">Login</button>
                    </a>
                </div>
            </div>
        </nav>
    </header>
    )
}