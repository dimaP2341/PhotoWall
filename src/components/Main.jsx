import { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import '../styles/stylesheet.css'
import AddPhoto from './AddPhoto'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      posts: [
        {
          id: 0,
          description: 'chameleon',
          imageLink: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
        },
        {
          id: 1,
          description: 'sunflower',
          imageLink:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg',
        },
        {
          id: 2,
          description: 'landscape',
          imageLink:
            'https://onlinejpgtools.com/images/examples-onlinejpgtools/mountains-near-water-better-quality.jpg',
        },
      ],
      screen: 'photos',
    }
    this.removePhoto = this.removePhoto.bind(this)
    this.navigate = this.navigate.bind(this)
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description)
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }))
  }

  navigate() {
    this.setState({
      screen: 'addPhoto',
    })
  }

  render() {
    return (
      <div>
        {this.state.screen === 'photos' && (
          <div>
            <Title title={'Photowall'} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
          </div>
        )}

        {this.state.posts === 'addPhoto' && (
          <div>
            <AddPhoto />
          </div>
        )}
      </div>
    )
  }
}

export default Main
