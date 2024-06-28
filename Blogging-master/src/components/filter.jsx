import * as React from 'react';
import { Card, CardContent, Typography, Grid, TextField, MenuItem } from '@mui/material';

const blogData = [
  { id: 1, title: 'Blog 1', content: 'Content 1', excerpt: 'Excerpt 1', category: 'Tech' },
  { id: 2, title: 'Blog 2', content: 'Content 2', excerpt: 'Excerpt 2', category: 'Health' },
  { id: 3, title: 'Another Blog', content: 'Content 3', excerpt: 'Excerpt 3', category: 'Tech' },
  { id: 4, title: 'Tech Blog', content: 'Content 4', excerpt: 'Excerpt 4', category: 'Tech' },
  // Add more blog data here
];

const BlogCardGrid = () => {
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogData);
  const [filterKeyword, setFilterKeyword] = React.useState('');
  const [filterCategory, setFilterCategory] = React.useState('');
  const [filterField, setFilterField] = React.useState('title'); // Default filter field

  const handleFilterKeywordChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterKeyword(value);
    applyFilters(value, filterCategory.toLowerCase(), filterField);
  };

  const handleFilterCategoryChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterCategory(value);
    applyFilters(filterKeyword.toLowerCase(), value, filterField);
  };

  const handleFilterFieldChange = (event) => {
    const value = event.target.value;
    setFilterField(value);
    applyFilters(filterKeyword.toLowerCase(), filterCategory.toLowerCase(), value);
  };

  const applyFilters = (keywordFilter, categoryFilter, fieldFilter) => {
    const filteredData = blogData.filter((blog) =>
      blog[fieldFilter].toLowerCase().includes(keywordFilter) &&
      blog.category.toLowerCase().includes(categoryFilter)
    );
    setFilteredBlogs(filteredData);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <TextField
          label={`Filter by ${filterField}`}
          variant="outlined"
          value={filterKeyword}
          onChange={handleFilterKeywordChange}
          style={{ marginRight: 16,marginLeft:10 }}
        />
        <TextField
          select
          label="Filter by field"
          variant="outlined"
          value={filterField}
          onChange={handleFilterFieldChange}
          style={{ minWidth: 150 }}
        >
          <MenuItem value="id">ID</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="content">Content</MenuItem>
          <MenuItem value="excerpt">Excerpt</MenuItem>
          <MenuItem value="category">Category</MenuItem>
        </TextField>

      </div>
      <Grid container spacing={2}>
        {filteredBlogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {blog.category}
                </Typography>
                <Typography variant="body2" component="p">
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogCardGrid;
