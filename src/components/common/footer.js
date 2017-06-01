import React, {Component} from 'react';
import {language} from 'store';

export default class Footer extends Component {
    render() {
        return (
            <footer className="com-footer">
                <div className="com-width text">
                    <div>
                        Copyright 2016 Barrior
                        &lt;<a href="mailto:Barrior@qq.com">Barrior@qq.com</a>&gt;&nbsp;
                    </div>
                    <div>
                        Licensed under the&nbsp;
                        <a href="http://www.opensource.org/licenses/mit-license.php"
                           target="_blank">
                            MIT
                        </a>
                        .&nbsp;
                    </div>
                    <div>
                        <a href="https://github.com/Barrior/JParticles"
                           target="_blank">
                            {language.footer}
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}