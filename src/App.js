import React, { useRef } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, Card, CardContent, Typography, Container, Grid, Box, Avatar, Paper, Divider, Link } from '@mui/material';
import { Stack, styled } from '@mui/system';
import { GiteRounded, GitHub, MailOutlineRounded, Telegram } from '@mui/icons-material';

function App() {
  // 创建各个部分的引用
  const introRef = useRef(null);
  const researchRef = useRef(null);
  const projectsRef = useRef(null);
  const publicationsRef = useRef(null);
  const contactRef = useRef(null);

  // 定义滚动到目标区域的函数
  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // 样式设计
  const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(90deg, #3f51b5, #2196f3)',
    boxShadow: 'none',
    borderBottom: '1px solid #e0e0e0',
  });

  const StyledCard = styled(Card)({
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'left',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    },
  });

  const Section = styled(Box)({
    padding: '25px 20px',
    textAlign: 'center',
  });

  return (
    <Container>
      {/* 顶部导航栏 */}
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bo's Homepage
          </Typography>
          <Tabs textColor="info">
            <Tab label="Short Bio" onClick={() => handleScrollTo(introRef)} />
            <Tab label="Publications" onClick={() => handleScrollTo(researchRef)} />
            <Tab label="Education" onClick={() => handleScrollTo(projectsRef)} />
              {/*<Tab label="Honors" onClick={() => handleScrollTo(publicationsRef)} />*/}
            
            <Tab label="Links" onClick={() => handleScrollTo(contactRef)} />
          </Tabs>
        </Toolbar>
      </StyledAppBar>

      {/* 介绍区块 */}
      <Section ref={introRef} sx={{ background: 'linear-gradient(120deg, #f5f5f5, #ffffff)' }}>

      <Grid container spacing={4} p={2}>
          <Grid item xs={12} md={5}>

            <Avatar
              src="avatar.jpg"
              alt="Profile Picture"
              sx={{ width: 180, height: 180, margin: '20px auto' }}
            />
            <Typography color="textSecondary">
              Me at HKUST in 2023
            </Typography>

          </Grid>

          <Grid item xs={12} md={7}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5">Short Bio</Typography>
                <Typography color="textSecondary" >
                  My name is Bo Pang, and I am currently a PhD candidate at School of CS, Peking University. Before that, I received my Bachelor's Degree of Engineering from Zhejiang University in June 2021. 
                  My major research interest include Geometry processing, Computer Graphics, 3D Learning, Neural Representation, etc. However, I am open to all kinds of topics related to graphics and HCI.
                  <br/>
                  <br/>
                  Welcome to discuss with me, even if you only want a casual chat! My email is bo98@stu.pku.edu.cn .
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

        </Grid>

      </Section>

      <Divider/>

      {/* 研究方向 */}
      <Section ref={researchRef} sx={{ background: 'linear-gradient(120deg, #f5f5f5, #ffffff)' }}>
       <Typography variant="h5" gutterBottom>
          Selected Publications
        </Typography>
        <Grid container spacing={1} p={2}>
          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/nelo.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">Neural Laplacian Operator for 3D Point Clouds</Typography>
                      <Typography color="textSecondary">
                        Bo Pang, Zhongtian Zheng, Yilong Li, Guoping Wang, and Peng-Shuai Wang
                        <br/>
                        ACM Transactions on Graphics (SIGGRAPH Asia), 43(6), 2024 
                        <br/>
                        <Link href="https://arxiv.org/abs/2409.06506"> Paper Link</Link>
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>
          

          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/gegnn.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">Learning the Geodesic Embedding with Graph Neural Networks</Typography>
                      <Typography color="textSecondary">
                        Bo Pang, Zhongtian Zheng, Guoping Wang, and Peng-Shuai Wang
                        <br/>
                        ACM Transactions on Graphics (SIGGRAPH Asia), 42(6), 2023 
                        <br/>
                        <Link href="https://arxiv.org/abs/2309.05613"> Paper Link</Link>
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>



          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/4DGS.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">Anchored 4D Gaussian Splatting for Dynamic Novel View Synthesis</Typography>
                      <Typography color="textSecondary">
                        Yilong Li, Bo Pang, Yisong Chen, Guoping Wang
                        <br/>
                        SIGGRAPH Asia 2025
                        <br/>
                        <Link href="https://dl.acm.org/doi/full/10.1145/3757377.3763898"> Paper Link</Link>
                      
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>


          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/upclean.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">Joint Point Cloud Upsampling and Cleaning with Octree-based CNNs</Typography>
                      <Typography color="textSecondary">
                        Jihe Li, Bo Pang, Peng-Shuai Wang
                        <br/>
                        Computational Visual Media (CVMJ), 2024 
                        <br/>
                        <Link href="https://github.com/octree-nn/upsample-clean"> Paper Link</Link>
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>


          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/nat.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">NAT: Neural Acoustic Transfer for Interactive Scenes in Real Time</Typography>
                      <Typography color="textSecondary">
                        Xutong Jin, Bo Pang, Chenxi Xu, Xinyun Hou, Guoping Wang, Sheng Li
                        <br/>
                        IEEE Transactions on Visualization and Computer Graphics (TVCG) 
                        <br/>
                        <Link href="https://ieeexplore.ieee.org/document/11192590"> Paper Link</Link>
                      
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>




          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/vibraverse.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">VibraVerse: A Large-Scale Geometry-Acoustics Alignment Dataset for Physically-Consistent Multimodal Learning</Typography>
                      <Typography color="textSecondary">
                        Bo Pang, Chenxi Xu, Jierui Ren, Guoping Wang, Sheng Li
                        <br/>
                        Submitted to CVPR 
                        <br/>
                        <Link href="https://arxiv.org/abs/2511.20422"> Paper Link</Link>
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>




          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Stack direction={"vertical"}>
                  <Box>
                    <Avatar
                      src="paper/neuralcone.png"
                      sx={{ width: 180, height: 120, margin: '0 2' }}
                      variant="square"
                    />
                  </Box>
                  <Box pl={3} pt={1}>
                    <Typography variant="h6">Neural Cone Radiosity for Interactive Global Illumination with Glossy Materials</Typography>
                      <Typography color="textSecondary">
                        Jierui Ren, Haojie Jin, Bo Pang, Yisong Chen, Guoping Wang, Sheng Li
                        <br/>
                        Submitted to IEEE Transactions on Visualization and Computer Graphics (TVCG) 
                        <br/>
                        <Link href="https://arxiv.org/abs/2509.07522"> Paper Link</Link>
                      </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>



        </Grid>
      </Section>

      <Divider/>

      <Section ref={projectsRef} sx={{ background: 'linear-gradient(120deg, #f5f5f5, #ffffff)' }}>

      <Typography variant="h5" gutterBottom>
          Education Background
        </Typography>

        <Grid container spacing={1} pl={5} pr={5}>
          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Zhejiang University</Typography>
                <Typography color="textSecondary" >
                  Electrical Computer Engineering, Bachelor of Engineering
                  <br/>
                  Sept. 2017 - July 2021, GPA: 3.94/4
                </Typography>
              </CardContent>
            </StyledCard>
        </Grid>

        <Grid item xs={12} md={12}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Peking University</Typography>
              <Typography color="textSecondary" >
                Geometry Processing & Computer Graphics, PhD candidate
                <br/>
                Sept. 2021 - July 2026, GPA: I don't care XD
              </Typography>
            </CardContent>
          </StyledCard>
          </Grid>
        </Grid>
        <br/>
        
      </Section>

      {/* 
      <Section ref={publicationsRef} sx={{ background: 'linear-gradient(120deg, #ffffff, #f5f5f5)' }}>
        <Typography variant="h5" gutterBottom>
          Selected Honors
        </Typography>
        <Grid container spacing={1} pl={5} pr={5}>
          <Grid item xs={12} md={12}>
            <StyledCard>
              <CardContent>
                <Typography>O</Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Section>
      出版物 */}
      <Divider/>

      {/* 联系方式 */}
      <Section ref={contactRef} sx={{ background: 'linear-gradient(120deg, #f5f5f5, #ffffff)' }}>
        <Typography variant="h5" gutterBottom>
          Connections & Links
        </Typography>
        <Typography variant="body1" color="textSecondary">
          We can chat via:
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" href="mailto:bo98@stu.pku.edu.cn" sx={{ marginRight: 3 }}>
            <Stack direction={"vertical"} spacing={20}>
              <MailOutlineRounded/>
              Email
            </Stack>
          </Button>

          <Button variant="contained" color="secondary" href="https://github.com/skinboC" sx={{ marginRight: 3 }}>
            <GitHub></GitHub>
            GitHub
          </Button>

          
        </Box>
        <br/>
        Last updated: 29th Dec, 2025
      </Section>
    </Container>
  );
}

export default App;
