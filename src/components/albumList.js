import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpg';

const AlbumsList = ({ albums }) => {
    return (
        <React.Fragment>
            {Object.keys(albums). lenght > 0 && (
                <div className="albums">
                    {albums.items.map((album, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <Card style={{ width: '18rem' }}>
                                    <a 
                                        target="blank"
                                        href={album.external_urls.spotify}
                                        rel="noopener norefferer"
                                        className="card-image-link"
                                    >
                                        {!_.isEmpty(album.images) ? (
                                            <Card.Img 
                                                variant="top"
                                                src={album.images[0].url}
                                                alt=""
                                            />
                                        ) : (
                                            <img src={music} alt="" />
                                        )}
                                    </a>
                                </Card>
                            </React.Fragment>
                        )
                    })}
                </div>
            )}
        </React.Fragment>
    )
};