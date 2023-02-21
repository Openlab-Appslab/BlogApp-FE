import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../blog.model' 
// import { Blog } from '../blog';



@Pipe({ name: 'searchFilter' })

export class SearchFilterPipe implements PipeTransform {

  transform(blogs: Blog[], searchTerm: string): Blog[] {
    if (!blogs || !searchTerm) {
        return blogs;
        
    }
    const filteredListings = blogs.filter(blog => {
        return (blog.category && blog.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
            (blog.title && blog.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
            (blog.content && blog.content.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) 
  });
    if (filteredListings.length === 0) {
        return blogs;
    } else {
        return filteredListings;
    }
  }
}