/* eslint-disable react/no-unknown-property */
import "./scoreBoard.css"

export default function ScoreBoard() {
    return (
        <>
            <div id="background"></div>
            <h1 align="center" className="scoreboard">Scoreboard</h1>
            <h2 align="center" className="gametype ">
               Democide
            </h2>
            <table>
                <tr className="team">
                    <td rowSpan="12" className="bestplayer">
                        <div>
                           Player Name: ImpulsePenny
                        </div>
                        <div className="mvp">MVP</div><img src="https://res.cloudinary.com/dxiqgi3ee/image/upload/v1532803952/soldier-1927614_1920.jpg" height="500" width="450" />
                    </td>
                    <td className="imperialist">
                        <h3>Imperialists</h3>
                    </td>
                    <td align="center" className="k">K</td>
                    <td align="center" className="a">A</td>
                    <td align="center" className="d">D</td>
                    <td align="center" className="win">WINNER!</td>
                </tr>
                <tr>
                    <td className="player">ImpulsePenny</td>
                    <td align="center" className="player">5</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">2</td>
                </tr>
                <tr>

                    <td className="player">Faginthedestroyer</td>
                    <td align="center" className="player">3</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr>

                    <td className="player">ragamuffin4239</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">2</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr>

                    <td className="player">b3tt!3</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">2</td>
                </tr>
                <tr>
                    <td className="player">Bada$$c00lGUI</td>
                    <td align="center" className="player">0</td>
                    <td align="center" className="player">0</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr className="team teamrebel">
                    <td className="rebel">
                        <h3>Rebellion</h3>
                    </td>
                    <td align="center" className="k">K</td>
                    <td align="center" className="a">A</td>
                    <td align="center" className="d">D</td>
                </tr>
                <tr>
                    <td className="player">Gertrude231</td>
                    <td align="center" className="player">4</td>
                    <td align="center" className="player">2</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr>

                    <td className="player">vacbantimmy</td>
                    <td align="center" className="player">3</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr>
                    <td className="player">imaginewaggons</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">0</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr>
                    <td className="player">flange35</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">0</td>
                    <td align="center" className="player">3</td>
                </tr>
                <tr>
                    <td className="player">NOOBS-KILL</td>
                    <td align="center" className="player">1</td>
                    <td align="center" className="player">0</td>
                    <td align="center" className="player">3</td>
                </tr>
            </table>
            <h2 align="center" className="taunt">--insert insult here--</h2>
        </>
    )
}
