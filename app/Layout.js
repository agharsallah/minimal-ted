import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
	    <nav className="navbar navbar-size-large">
	    	<div className="container-fluid">


		        <div className="navbar-collapse collapse" id="collapse-example-default">
		        </div>

	    	</div>
		</nav>

      	{children}

      	
            <div className="togglebutton">
              <label>
                Wi-Fi
                <input type="checkbox" />
                </label>
            </div>
            <div className="togglebutton">
              <label>
                Bluetooth
                <input type="checkbox"/>
              </label>
            </div>

    </div>
  )
}
