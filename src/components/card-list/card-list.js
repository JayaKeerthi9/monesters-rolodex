import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card-list.component.css';

class CardList extends Component {
    render() {
        const { monsters, searchString } = this.props;
        const fileteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {fileteredMonsters.map(monster => {
                            const {name,email,id} = monster;
                            return (
                                <>
                                <div className="card" key={id}>
                                    <img className="monsterimg" alt={`monster ${name}`} src={`https://robohash.org/${id}/set=set4`} />
                                    <h4 >{name}</h4>
                                    <p>{email}</p>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

        );
    }
}
export default CardList;