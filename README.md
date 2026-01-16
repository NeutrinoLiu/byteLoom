# 🧵 ByteLoom
#### ByteLoom: Weaving Geometry-Consistent Human-Object Interactions through ProgressiveCurriculum Learning

[![](https://img.shields.io/badge/Project-Page-green.svg)](https://neutrinoliu.github.io/byteloom/) [![](https://img.shields.io/badge/Paper-Arxiv-orange.svg)](https://arxiv.org/abs/2512.22854)
[![](https://img.shields.io/badge/Paper-Dataset-yellow.svg)](https://huggingface.co/datasets/byteloom-HOI/Mani4D_test)

https://github.com/user-attachments/assets/25e01349-d9d6-42bd-8584-18fa817f8a11

## Abstract
Human-object interaction (HOI) video generation has garnered increasing attention due to its promising applications in digital humans, e-commerce, advertising, and robotics imitation learning. However, existing methods face two critical limitations: (1) a lack of effective mechanisms to inject multi-view information of the object into the model, leading to poor cross-view consistency, and (2) heavy reliance on fine-grained hand mesh annotations for modeling interaction occlusions. To address these challenges, we introduce ByteLoom, a Diffusion Transformer (DiT)-based framework that generates realistic HOI videos with geometrically consistent object illustration, using simplified human conditioning and 3D object inputs. We first propose an RCM-cache mechanism that leverages Relative Coordinate Maps (RCM) as a universal representation to maintain object's geometry consistency and precisely control 6-DoF object transformations in the meantime. To compensate HOI dataset scarcity and leverage existing datasets, we further design a training curriculum that enhances model capabilities in a progressive style and relaxes the demand of hand mesh. Extensive experiments demonstrate that our method faithfully preserves human identity and the object's multi-view geometry, while maintaining smooth motion and object manipulation.

## Key Innovation:
### ✨ RCM-cache: inject multi-view 3D so the model sees all angles
  <img width="360" height="210" alt="Screenshot 2025-12-31 at 6 09 42 PM" src="https://github.com/user-attachments/assets/f11644b3-8b78-4b11-8702-36e9febda38c" />

### ✨ 3-stage curriculum: pose → hand+object → full HOI
<img width="900" height="140" alt="Screenshot 2025-12-31 at 6 09 08 PM" src="https://github.com/user-attachments/assets/665d6922-2d90-4bae-bd68-f5a94d4b8e86" />


## Data Curation
<img width="1601" height="652" alt="Screenshot 2025-12-31 at 6 03 22 PM" src="https://github.com/user-attachments/assets/0e39f10e-7bc9-4d0c-bf82-7aae042ce2ce" />

## Model Training
<img width="1661" height="567" alt="Screenshot 2025-12-31 at 6 02 20 PM" src="https://github.com/user-attachments/assets/5a8d7aed-7a46-4662-939b-7b46675d81b0" />

## Quantitive Result
<img width="1344" height="297" alt="Screenshot 2025-12-31 at 6 12 04 PM" src="https://github.com/user-attachments/assets/86512f6b-d208-4be9-8834-7ed55043a125" />

## TODO
- [ ] _release Mani4D-Test dataset_

## Citation

```
@misc{liu2025byteloomweavinggeometryconsistenthumanobject,
      title={ByteLoom: Weaving Geometry-Consistent Human-Object Interactions through Progressive Curriculum Learning}, 
      author={Bangya Liu and Xinyu Gong and Zelin Zhao and Ziyang Song and Yulei Lu and Suhui Wu and Jun Zhang and Suman Banerjee and Hao Zhang},
      year={2025},
      eprint={2512.22854},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2512.22854}, 
}
```
