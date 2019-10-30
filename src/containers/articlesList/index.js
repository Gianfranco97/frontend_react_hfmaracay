import React from 'react';
import { List, Spin } from 'antd';
import './styles.css';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default class ArticlesList extends React.Component {

    state = {
        data: [],
        loading: true,
    };

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
                loading: false
            });
        });
    }

    fetchData = async callback => {
        try {
            const res = await fetch(fakeDataUrl, {
                type: 'json',
                method: 'get',
                contentType: 'application/json',
            });
            callback(await res.json());
        } catch (error) { }
    };

    render() {
        return (
            <div id="articles-list">
                {this.state.loading
                    ? (
                        <div className="demo-loading-container">
                            <Spin />
                        </div>
                    )
                    :
                    <List
                        dataSource={this.state.data}
                        renderItem={(item, index) => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={
                                        <img
                                            height={150}
                                            src={`https://picsum.photos/200/200?random=${index}`}
                                        />
                                    }
                                    title={<h2 href="https://ant.design">{item.name.last}</h2>}
                                    description={<>
                                        <h4><i>Nombre del autor</i></h4>


                                        <p>
                                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                                        </p>
                                    </>}
                                />
                            </List.Item>
                        )}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                    >
                    </List>
                }
            </div>
        );
    }
}